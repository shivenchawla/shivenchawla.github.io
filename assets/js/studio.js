"use strict";

const topics = {
  "red-teaming": {
    title: "AI red teaming",
    description: "Assessing AI models and the systems around them through adversarial testing. Explore public research, assessment tooling contributions, and related supervised work."
  },
  emulation: {
    title: "End-to-end adversarial emulation",
    description: "Connecting weaknesses into realistic attack scenarios. Explore my public BSides presentation and related student research on indirect prompt injection in RAG systems."
  },
  "adversarial-ml": {
    title: "Adversarial machine learning",
    description: "Studying model behavior under attack and evaluating robustness. This thread connects assessment tooling, shared threat knowledge, and supervised research."
  },
  "threat-knowledge": {
    title: "Shared threat knowledge",
    description: "Making adversarial behavior understandable beyond a single assessment. My contribution to MITRE ATLAS is an important part of this research thread."
  },
  "network-security": {
    title: "Network & IoT security",
    description: "My research foundations: applying machine learning to real-time intrusion detection in IoT networks."
  }
};

const controls = document.querySelector("#work-controls");
const search = document.querySelector("#work-search");
const topicFilter = document.querySelector("#topic-filter");
const typeFilter = document.querySelector("#type-filter");
const cards = [...document.querySelectorAll(".work-card")];
const nodes = [...document.querySelectorAll("[data-topic]")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const title = document.querySelector("#topic-title");
const description = document.querySelector("#topic-description");
const resultsLink = document.querySelector("#topic-results");
const initialTitle = title.textContent;
const initialDescription = description.textContent;

function updateResults() {
  const query = search.value.trim().toLocaleLowerCase();
  const selectedTopic = topicFilter.value;
  let visible = 0;

  for (const card of cards) {
    const matches = (!selectedTopic || card.dataset.topics.split(" ").includes(selectedTopic))
      && (!typeFilter.value || card.dataset.type === typeFilter.value)
      && (!query || card.textContent.toLocaleLowerCase().includes(query));
    card.hidden = !matches;
    if (matches) visible += 1;
  }

  resultCount.textContent = `${visible} of ${cards.length} entries shown`;
  emptyState.hidden = visible !== 0;
  for (const node of nodes) {
    if (node.dataset.topic === selectedTopic) node.setAttribute("aria-current", "true");
    else node.removeAttribute("aria-current");
  }
  const topic = topics[selectedTopic];
  title.textContent = topic ? topic.title : initialTitle;
  description.textContent = topic ? topic.description : initialDescription;
  resultsLink.textContent = topic ? `View ${visible} related entries ↓` : "Browse all work ↓";
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
  const topic = params.get("topic");
  topicFilter.value = Object.hasOwn(topics, topic) ? topic : "";
  const type = params.get("type");
  typeFilter.value = [...typeFilter.options].some(option => option.value === type) ? type : "";
  search.value = params.get("q") || "";
  updateResults();
}

controls.hidden = false;
resultCount.hidden = false;
controls.addEventListener("submit", event => event.preventDefault());
search.addEventListener("input", writeFilters);
topicFilter.addEventListener("change", writeFilters);
typeFilter.addEventListener("change", writeFilters);
controls.addEventListener("reset", event => {
  event.preventDefault();
  search.value = "";
  topicFilter.value = "";
  typeFilter.value = "";
  writeFilters();
});
for (const node of nodes) {
  node.addEventListener("click", event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    search.value = "";
    typeFilter.value = "";
    topicFilter.value = node.dataset.topic;
    writeFilters();
  });
}

// Direct links to a featured story should reveal it even after filtering.
function revealAnchor() {
  const card = cards.find(entry => `#${entry.id}` === window.location.hash);
  if (card && card.hidden) {
    search.value = "";
    topicFilter.value = "";
    typeFilter.value = "";
    writeFilters();
    card.scrollIntoView();
  }
}
document.addEventListener("click", event => {
  const link = event.target.closest('a[href^="#"]');
  if (link && cards.some(card => `#${card.id}` === link.getAttribute("href") && card.hidden)) {
    search.value = "";
    topicFilter.value = "";
    typeFilter.value = "";
    writeFilters();
  }
});
window.addEventListener("popstate", () => { readFilters(); revealAnchor(); });
window.addEventListener("hashchange", revealAnchor);
readFilters();
revealAnchor();
