---
layout: powerbi-custom-visuals
permalink: /powerbi/custom-visuals/
title: 'SAIFAS BI | Power BI custom visuals'
pageUrl: './'
pageName: 'Power BI custom visuals'
headline: 'Our team has developed next Power BI custom visuals'
---
{% for pbi-cv_hash in site.data.powerbi.custom-visuals %}
{% assign pbi-cv = pbi-cv_hash[1].minimized %}
  {% include powerbi/custom-visual/card.html %}
{% endfor %}
