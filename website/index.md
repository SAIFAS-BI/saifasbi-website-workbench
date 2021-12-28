---
layout: home
---
{% for post in site.posts %}
  {% include card.html %}
{% endfor %}
