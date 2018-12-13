const axios = require('axios');

const baseURL = 'https://testsite.staging.seekrtech.com/forest_rankings';

async function getForestRankingData({ number, lastPosition }) {
  let response = {};
  try {
    response = await axios.get(
      `${baseURL}?n=${number}&last_pos=${lastPosition}`
    );
  } catch (error) {
    console.error(error);
  }
  return response.data;
}

module.exports = {
  getForestRankingData,
};
