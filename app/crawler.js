const cheerio = require('cheerio')
const request = require('request')
const removeEmptyLines = require('remove-blank-lines')
const slackWebhook = require('slack-webhook')

const slack = new slackWebhook(process.env.SLACKWEBHOOK, {
  defaults: {
    username: process.env.SLACKUSER,
    channel: process.env.SLACKCHANNEL,
    icon_emoji: ':pig2:'
  }
})

const month = parseInt(new Date(Date.now()).getMonth()) + 1
const date = new Date(Date.now()).getDate() + "." + month + "." + new Date(Date.now()).getFullYear()
const webpage = "https://victualia.sodexo-velum.de/victualia/menuplan.html?date=" + date

console.log("Visiting page " + webpage + "\n\n");
request(webpage, (err, res, body) => {
  if(err) return console.error("Error: " + err)
  // Check status code (200 is HTTP OK)
  console.log("Status code: " + res.statusCode + "\n\n");
  if(res.statusCode === 200) {
    const $ = cheerio.load(body)
    const plan = removeEmptyLines($.text().replace(/(^[ \t]*\n)/gm, "").replace(/(^[\s+].*)/gm, ""))
    const suppe = plan.match(/^Suppe\n.*/gm).toString()
    const tagessalat = plan.match(/^Tagessalat.*\n.*/gm).toString()
    const hauptgaenge = plan.match(/^Hauptgänge.*\n.*\n.*/gm).toString()
    const vegetarisch = plan.match(/^Vegetarisch.*\n.*/gm).toString()
    const msg = suppe + "\n\n" + tagessalat + "\n\n" + hauptgaenge + "\n\n" + vegetarisch

    slack.send(msg).then((res) => {
      console.log("Send message to Slack")
    }).catch((err) => {
      console.error("Could not send message to Slack")
    })

    //console.log(msg)
  } else {
    console.error("Page did not return a HTTP 200")
  }
});