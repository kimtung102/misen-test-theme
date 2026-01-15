- Streamline the process of integrating script and CSS libraries from npm into your Shopify themes. With this tool, you can effortlessly incorporate popular libraries like Alpine.js, Swiper, and Tailwind into your Shopify theme projects.
- Begin by navigating to your Shopify theme folder and use the following command:
```
git clone https://github.com/rocklss/shop-libs.git zmodule
touch .gitignore && echo "node_modules/" >> .gitignore && cd zmodule && rm -rf .git && npm i
```
- Write your JavaScript code within the 'main.js' file, and then execute the following command:
```
npm run webpack
```
- To harness the power of Tailwind CSS in your template, simply run the command
```
npm run tailwind
```
Alternatively, you can make updates to your CSS code within the 'main.css' file.
- The output will include two files: '/assets/cw-main.js' and '/assets/cw-main.css'. To incorporate them into your `theme.liquid` file, simply add the following code snippet just before the closing `</head>` tag:
```
{{ 'cw-main.css' | asset_url | stylesheet_tag : preload:true }}
<script src="{{ 'cw-main.js' | asset_url }}" defer="defer"></script>
```
