---
layout: default
permalink: /powerbi/reports/
title: 'SAIFAS BI | Power BI reports'
withoutNav: true
---
{% include page/other/headline.html headline="Reports" %}
<div style="display: flex; justify-content: center; flex-wrap: wrap; flex: 1;">
{% for report_hash in site.data.powerbi.reports %}
{% assign report = report_hash[1] %}
  {% include items/card.html 
    imageUrl=report.image 
    title=report.title 
    iconUrl=report.iconUrl
    cardType="Power BI report"
    type="report" 
    description=report.description
    detailsLink=report.detailsLink
    embeddedLink=report.embeddedLink
    publishedLink=report.publishedLink
  %}
{% endfor %}
</div>