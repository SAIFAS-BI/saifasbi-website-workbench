---
layout: default
permalink: /powerbi/reports/
title: 'SAIFAS BI | Power BI reports'
breadcrumbs-title: 'Power BI reports'
---
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