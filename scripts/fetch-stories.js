const axios = require('axios');
const fs = require('fs');

const args = process.argv.slice(2);
const categoryArg = args.find(arg => arg.startsWith('--category='));
const category = categoryArg ? categoryArg.split('=')[1] : null;
console.log({ö:process.argv, o:process.argv[2], args, categoryArg})

const getStories = async () => {
  const { data } = await axios.get(
    `https://api.goperigon.com/v1/all?size=100&apiKey=3a066202-e924-460f-afd6-314cd0cd98f9&from=2024-07-24&sourceGroup=top100&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date${
      category ? `&category=${category}` : ""
    }`
  );
  fs.writeFileSync(
    // `public/stories_${category.toLowerCase() ?? "uncategorised"}.json`,
    `public/stories_${category?.toLowerCase() ?? "uncategorised"}.json`,
    JSON.stringify(data, null, 2),
    "utf-8"
  );
  console.log({ data });
};

getStories();
