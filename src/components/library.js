
export const getJokes = async (count = 10, category = "") => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const jokesPromises = Array(count)
      .fill()
      .map(async () => {
        const result = await fetch(url);
        const joke = await result.json();
        return joke;
      });
    const jokes = await Promise.all(jokesPromises);
    return jokes;
  };

  