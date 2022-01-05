---
layout: powerbi-reports
title: 'SAIFAS BI | Power BI showcase sample reports for Power BI custom visual - SAIFAS Table'
---
{% for report in site.collection-powerbi-reports %}
{% if report.customVisual == 'table' %}
  {% include card-powerbi-report.html %}
{% endif %}
{% endfor %}
