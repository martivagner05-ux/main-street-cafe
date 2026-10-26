# Show your latest Facebook posts on the website

This takes about 10 minutes. It must be done by someone who is an **admin of the
Main Street Cafe Facebook page**, because Facebook asks the page admin to give permission.

We use a free service called **Elfsight**. Once it's set up, your newest posts
appear on the website by themselves. You don't need to do anything after you post.

## Steps

1. Go to **https://elfsight.com/facebook-feed-widget/** and click **Create widget** (or "Try it free").
2. Sign up with your email (no credit card needed for the free plan).
3. Pick any template. We'll match the colors to the website later.
4. In the widget editor, find the **source** setting and click **Connect / Log in with Facebook**.
   - Log in with the Facebook account that manages the cafe page.
   - When Facebook asks which pages to allow, select **Main Street Cafe** and allow access.
   - Choose **Main Street Cafe** as the source page.
5. In the **Layout** settings, set the number of posts shown to **2**.
6. Click **Publish** (or **Add to website**).
7. Elfsight shows a short piece of code. It looks like this:

   ```
   <script src="https://elfsightcdn.com/platform.js" async></script>
   <div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" data-elfsight-app-lazy></div>
   ```

   **Copy that code and send it to your web designer.** That's all we need.

## Good to know

- **Free plan limit:** about **200 website views per month**. If the site gets more
  visitors than that, the feed stops showing until the next month. To avoid that, upgrade to Elfsight's
  **Basic plan (about $4/month billed yearly)** in your Elfsight account.
- The free plan shows a small "Elfsight" label under the feed. Paid plans remove it.
- You stay in control: you can disconnect the Facebook page from Elfsight at any time.
