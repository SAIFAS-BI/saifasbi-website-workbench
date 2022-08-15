---
layout: default
permalink: /powerbi/custom-visuals/table/reports/
title: 'SAIFAS BI | Power BI showcase sample reports for Power BI custom visual - SAIFAS Table'
breadcrumbs-title: 'Power BI reports'
withoutNav: true
---
{% include page/other/headline.html headline="For selected Power BI custom visual we prepared next showcase sample reports" %}
{% for report_hash in site.data.powerbi.reports %}
{% assign report = report_hash[1] %}
{% if report.relationToCustomVisuals contains 'table' %}
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
{% endif %}
{% endfor %}
