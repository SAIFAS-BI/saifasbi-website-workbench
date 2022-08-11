---
layout: default
permalink: /powerbi/reports/company-employees/
title: 'SAIFAS BI | Power BI show case sample report for Power BI custom visual - SAIFAS Table'
pageName: 'Company employees'
---
{% include pages/details.html
  imageUrl=site.data.powerbi.reports.company-employees.image
  iconUrl=site.data.powerbi.reports.company-employees.iconUrl
  title=site.data.powerbi.reports.company-employees.title
  cardType="Power BI report"
  type="report"
  embeddedLink=site.data.powerbi.reports.company-employees.embeddedLink
  publishedLink=site.data.powerbi.reports.company-employees.publishedLink
  images=site.data.powerbi.reports.company-employees.images
%}
Related to this visuals:
{% for visual_link in site.data.powerbi.reports.company-employees.relationToCustomVisuals %}
  <a style="text-transform: capitalize;" href="/powerbi/custom-visuals/{{visual_link}}">{{ visual_link }}</a>
{% endfor %}