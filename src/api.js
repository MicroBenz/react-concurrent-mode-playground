async function githubAPIWrapper(url) {
  const response = await fetch('https://api.github.com' + url);
  if (response.status !== 200) {
    throw new Error('GitHub API returned Error ' + response.status);
  }
  return response.json();
}

export function getReposFromUser(userId) {
  return wrapPromise(githubAPIWrapper(`/users/${userId}/repos`));
}

export function getUserProfile(id) {
  return wrapPromise(githubAPIWrapper(`/users/${id}`));
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
