 const output = document.getElementById("output");

    function showError(message) {
      output.innerHTML = `
        <div class="bg-red-100 text-red-700 p-4 rounded">
          ${message}
        </div>
      `;
    }

    function showSuccess(data) {
      output.innerHTML = `
        <div class="bg-green-100 text-green-700 p-4 rounded">
          <h2 class="font-bold">${data.title}</h2>
          <p>${data.body}</p>
        </div>
      `;
    }

    // 1. API returns 404 (response.ok = false)
    document.getElementById("fetchBtn").addEventListener("click", async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/9999");

        if (!response.ok) {
          throw new Error("Post not found, please try another ID.");
        }

        const data = await response.json();
        showSuccess(data);

      } catch (error) {
        showError(error.message);
      }
    });

    // 2. Completely broken URL (network error)
    document.getElementById("brokenBtn").addEventListener("click", async () => {
      try {
        const response = await fetch("https://this-url-does-not-exist-12345.com");

        if (!response.ok) {
          throw new Error("Something went wrong with the request.");
        }

        const data = await response.json();
        showSuccess(data);

      } catch (error) {
        showError("Network error, check your internet connection.");
      }
    });