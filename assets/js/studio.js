"use strict";

const controls = document.querySelector("#work-controls");
const search = document.querySelector("#work-search");
const topicFilter = document.querySelector("#topic-filter");
const typeFilter = document.querySelector("#type-filter");
const entries = [...document.querySelectorAll(".work-entry")];
const groups = [...document.querySelectorAll(".work-group")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function updateResults() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (const entry of entries) {
    const matches = (!topicFilter.value || entry.dataset.topics.split(" ").includes(topicFilter.value))
      && (!typeFilter.value || entry.dataset.type === typeFilter.value)
      && (!query || entry.textContent.toLocaleLowerCase().includes(query));
    entry.hidden = !matches;
    if (matches) visible += 1;
  }
  resultCount.textContent = `${visible} of ${entries.length} entries shown`;
  emptyState.hidden = visible !== 0;
  for (const group of groups) {
    group.hidden = ![...group.querySelectorAll(".work-entry")].some(entry => !entry.hidden);
    group.open = !group.hidden && Boolean(query || topicFilter.value || typeFilter.value);
  }
}

function writeFilters() {
  const url = new URL(window.location.href);
  for (const [key, value] of [["topic", topicFilter.value], ["type", typeFilter.value], ["q", search.value.trim()]]) {
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  window.history.replaceState(null, "", url);
  updateResults();
}

function readFilters() {
  const params = new URLSearchParams(window.location.search);
  for (const [key, select] of [["topic", topicFilter], ["type", typeFilter]]) {
    const value = params.get(key);
    select.value = [...select.options].some(option => option.value === value) ? value : "";
  }
  search.value = params.get("q") || "";
  updateResults();
}

function resetFilters() {
  search.value = "";
  topicFilter.value = "";
  typeFilter.value = "";
  writeFilters();
}

// Preserve direct links to work entries even when a filter would hide them.
function revealAnchor() {
  const entry = [...entries, ...groups].find(item => `#${item.id}` === window.location.hash);
  if (entry) {
    const group = entry.closest(".work-group");
    if (entry.hidden || group.hidden) resetFilters();
    group.open = true;
    entry.scrollIntoView();
  }
}

controls.hidden = false;
resultCount.hidden = false;
controls.addEventListener("submit", event => event.preventDefault());
search.addEventListener("input", writeFilters);
topicFilter.addEventListener("change", writeFilters);
typeFilter.addEventListener("change", writeFilters);
controls.addEventListener("reset", event => {
  event.preventDefault();
  resetFilters();
});
document.addEventListener("click", event => {
  const link = event.target.closest('a[href^="#"]');
  if (link && [...entries, ...groups].some(entry => `#${entry.id}` === link.getAttribute("href") && entry.hidden)) {
    resetFilters();
  }
  if (link) {
    const target = [...entries, ...groups].find(entry => `#${entry.id}` === link.getAttribute("href"));
    if (target) target.closest(".work-group").open = true;
  }
});
window.addEventListener("popstate", () => { readFilters(); revealAnchor(); });
window.addEventListener("hashchange", revealAnchor);
readFilters();
revealAnchor();
