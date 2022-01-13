---
layout: powerbi-reports
title: 'SAIFAS BI | Power BI showcase sample reports for Power BI custom visual - SAIFAS Table'
pageUrl: './'
pageName: 'Power BI reports'
pageHeadline: 'For selected Power BI custom visual we prepared next showcase sample reports'
currentCanvasPathName: 'Power BI reports'
currentCanvasPathUrl: './'
currentCanvasParentItemPathName: 'Table'
currentCanvasParentItemPathUrl: '../'
currentCanvasParentItemParentArrayPathName: 'Power BI custom visuals'
currentCanvasParentItemParentArrayPathUrl: '../../'
---
{% for report in site.powerbi-reports %}
{% if report.customVisual == 'table' %}
  {% include card-powerbi-report.html %}
{% endif %}
{% endfor %}
