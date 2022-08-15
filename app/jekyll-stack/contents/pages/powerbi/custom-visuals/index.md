---
layout: default
permalink: /powerbi/custom-visuals/
title: 'SAIFAS BI | Power BI custom visuals'
withoutNav: true
---
{% include page/other/headline.html headline="Our team has developed next Power BI custom visuals" %}
<div style="display: flex; justify-content: center; flex-wrap: wrap; flex: 1;">
  {% for pbi-cv_hash in site.data.powerbi.custom-visuals %}
  {% assign pbi-cv = pbi-cv_hash[1] %}
    {% include items/card.html 
      imageUrl=pbi-cv.global.imageUrl
      title=pbi-cv.global.title 
      iconUrl=pbi-cv.global.iconUrl 
      type="product"
      cardType="Power BI Custom Visual"
      detailsLink=pbi-cv.minimized.detailsLink  
    %}
  {% endfor %}
</div>
{% include items/contact-link-container.html mail="bi-support@saifas.org" text="For purchasing any custom visual, please contact: "%}