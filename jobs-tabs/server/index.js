const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

// start the server with json parser
app.use(express.json());
app.use(cors());

// add end-point
app.get('/resume', (req, res) => {
  res.status(200).send([{
    "id":"recAGJfiU4CeaV0HL",
    "order":3,
    "title":"Full Stack Web Developer",
    "dates":"December 2015 - Present",
    "duties":[
       "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
       "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
       "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
    ],
    "company":"TOMMY"
  }])
})


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
