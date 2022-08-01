---
layout: powerbi-report
permalink: /powerbi/reports/company-employees
title: 'SAIFAS BI | Power BI show case sample report for Power BI custom visual - SAIFAS Table'
pageUrl: './'
pageName: 'Company employees'
currentVisualPathName: 'Table'
currentVisualPathUrl: '/powerbi/table/'
currentVisualReportsUrl: '/powerbi/reports/'
currentReportPathName: 'Company employees'
currentReportPathUrl: './'
---
{% include lib-gallery-assets.html %}

<div class="headline" style="justify-content: flex-start; padding-left: 20px;">Showcase Sample 1</div>
  <div class='columns-container'>
    <div class='left-column'>
      <img src="/assets/graphics/images/content/saifas-bi-powerbi-reports/saifas-bi-pbi-report-company-employees-300px-300px.png" style="width: 300px; height: 300px; margin: 10px 0;">
      <div class='left-column__title'>Details</div>
      <a class='btn disabled' href='./embedded'>Embedded</a>
      <a class='btn' href='./published'>Published</a>
      Related to this visuals:
      {% for visual_link in site.data.powerbi.reports.company-employees.relationToCustomVisuals %}
        <a style="text-transform: capitalize;" href="/powerbi/custom-visuals/{{visual_link}}">{{ visual_link }}</a>
      {% endfor %}
    </div>
    <div class='right-column'>
    <div id="lightgallery">
      <a href="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg">
          <img src="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg" />
      </a>
      <a href="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg">
          <img src="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg" />
      </a>
      <a href="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg">
          <img src="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg" />
      </a>
      <a href="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg">
          <img src="/assets/graphics/images/content/empty/empty-showcase-sample-report/empty-image-500px-400px.jpg" />
      </a>
    </div>
  </div>
</div>
