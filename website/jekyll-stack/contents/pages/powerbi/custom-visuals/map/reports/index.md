---
layout: powerbi-reports
permalink: /powerbi/custom-visuals/map/reports/
title: 'SAIFAS BI | Power BI showcase sample reports for Power BI custom visual - SAIFAS Map'
pageUrl: './'
pageName: 'Power BI reports'
pageHeadline: 'For selected Power BI custom visual we prepared next showcase sample reports'
currentCanvasPathName: 'Power BI reports'
currentCanvasPathUrl: './'
currentCanvasParentItemPathName: 'Map'
currentCanvasParentItemPathUrl: '../'
currentCanvasParentItemParentArrayPathName: 'Power BI custom visuals'
currentCanvasParentItemParentArrayPathUrl: '../../'
---
{% for report_hash in site.data.powerbi.reports %}
{% assign report = report_hash[1] %}
{% if report.relationToCustomVisuals contains 'map' %}
  {% include powerbi/report/card.html %}
{% endif %}
{% endfor %}
