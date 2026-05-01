(function () {
  function baseUrl(path) {
    var base = window.SEOBTS_BASEURL || "";
    return base + path;
  }

  function normalize(value) {
    return (value || "").toString().toLowerCase();
  }

  function formatDate(value) {
    if (!value) return "";
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return value.slice(0, 10);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function scoreItem(item, terms) {
    var title = normalize(item.title);
    var slug = normalize(item.slug);
    var content = normalize(item.content);
    var score = 0;

    terms.forEach(function (term) {
      if (title.indexOf(term) !== -1) score += 8;
      if (slug.indexOf(term) !== -1) score += 4;
      if (content.indexOf(term) !== -1) score += 1;
    });

    return score;
  }

  function renderResults(resultsEl, statusEl, items, query) {
    resultsEl.innerHTML = "";

    if (!query) {
      statusEl.textContent = "Type a topic, patent, company, or search concept.";
      return;
    }

    if (!items.length) {
      statusEl.textContent = "No matching archived posts found.";
      return;
    }

    statusEl.textContent = items.length + " result" + (items.length === 1 ? "" : "s");

    items.slice(0, 50).forEach(function (item) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      var meta = document.createElement("span");
      var excerpt = document.createElement("p");

      link.className = "item-title";
      link.href = item.url;
      link.textContent = item.title || item.slug || "Untitled post";

      meta.className = "item-meta";
      meta.textContent = [formatDate(item.date_published), item.author || "Bill Slawski"]
        .filter(Boolean)
        .join(" / ");

      excerpt.textContent = item.content || "";

      li.appendChild(link);
      li.appendChild(meta);
      li.appendChild(excerpt);
      resultsEl.appendChild(li);
    });
  }

  function initSearch() {
    var input = document.querySelector("[data-search-input]");
    var resultsEl = document.querySelector("[data-search-results]");
    var statusEl = document.querySelector("[data-search-status]");

    if (!input || !resultsEl || !statusEl) return;

    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get("q") || "";
    input.value = initialQuery;

    fetch(baseUrl("/search.json"))
      .then(function (response) {
        if (!response.ok) throw new Error("Search index unavailable");
        return response.json();
      })
      .then(function (items) {
        function run() {
          var query = input.value.trim();
          var terms = normalize(query).split(/\s+/).filter(Boolean);
          var matches = [];

          if (terms.length) {
            matches = items
              .map(function (item) {
                return {
                  item: item,
                  score: scoreItem(item, terms)
                };
              })
              .filter(function (entry) {
                return entry.score > 0;
              })
              .sort(function (a, b) {
                return b.score - a.score;
              })
              .map(function (entry) {
                return entry.item;
              });
          }

          renderResults(resultsEl, statusEl, matches, query);
        }

        input.addEventListener("input", run);
        run();
      })
      .catch(function () {
        statusEl.textContent = "Search index could not be loaded.";
      });
  }

  document.addEventListener("DOMContentLoaded", initSearch);
}());
