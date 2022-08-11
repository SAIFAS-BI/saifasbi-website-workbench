---
layout: default
permalink: /powerbi/custom-visuals/
title: 'SAIFAS BI | Power BI custom visuals'
breadcrumbs-title: Power BI custom visuals
---
{% include page/other/headline.html headline="Our team has developed next Power BI custom visuals" %}
{% for pbi-cv_hash in site.data.powerbi.custom-visuals %}
{% assign pbi-cv = pbi-cv_hash[1].minimized %}
  {% include items/card.html 
    imageUrl=pbi-cv.global.imageUrl
    title=pbi-cv.global.title 
    iconUrl=pbi-cv.global.iconUrl 
    type="product"
    cardType="Power BI Custom Visual"
    detailsLink=pbi-cv.minimized.detailsLink  
  %}
{% endfor %}
