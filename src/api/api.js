export const BASE_URL = ' https://hacker-news.firebaseio.com/v0';

export const FETCH_NEW_STORIES = `${BASE_URL}/newstories.json?orderBy="$key"`;

export const FETCH_TOP_STORIES = `${BASE_URL}/topstories.json?orderBy="$key"`;

export const FETCH_STORY_BY_ID = `${BASE_URL}/item`;

export const fetchStories = async (limit, type) => {
  const url = type === 'top-stories' ? FETCH_TOP_STORIES : FETCH_NEW_STORIES;
  const response = await fetch(`${url}&limitToFirst=${limit}`);
  if (response.ok) {
    const responseJson = await response.json();
    return responseJson;
  }
};

export const fetchStoryById = async (id) => {
  const response = await fetch(`${FETCH_STORY_BY_ID}/${id}.json`);
  if (response.ok) {
    const responseJson = await response.json();
    return responseJson;
  }
};
