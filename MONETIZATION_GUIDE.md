# Monetization Guide: Google AdSense & AdMob 💰

Since AirAware is a **web application**, you will use **Google AdSense** to monetize it. If you convert this into a mobile app (using Capacitor or Cordova), you would use **Google AdMob**.

## 1. Google AdSense (For Website)
This is the best way to earn money from your website project.

### Setup Steps:
1.  **Sign Up**: Go to [google.com/adsense](https://www.google.com/adsense) and sign up with your Google account.
2.  **Add Site**: Enter your website URL (once you deploy it to GitHub Pages or Netlify).
3.  **Get Ad Code**:
    - Go to **Ads > By ad unit**.
    - Choose **Display ads**.
    - Copy the `<script>` and `ins` code provided.
4.  **Insert into HTML**: 
    - I have added placeholders in `index.html` labeled `<!-- AD SECTION -->`. 
    - Replace the placeholder `<div>` with your actual Google code.
5.  **Ads.txt Verification**:
    - I have created an `ads.txt` file in your root folder. 
    - This file tells Google that you are the authorized owner of the ad space.

### Tips for Approval:
- Ensure you have a **Privacy Policy** page (AdSense requires this).
- Have a "Contact Us" and "About Us" page (already done!).
- Use high-quality original content.

---

## 2. Google AdMob (For Mobile App)
If you turn this website into a real `.apk` for Android:

1.  **Sign Up**: Go to [admob.google.com](https://admob.google.com).
2.  **Add Your App**: Create an "Android" app entry.
3.  **Choose Ad Format**: Typically **Banner** or **Interstitial**.
4.  **Integration**:
    - You will need a wrapper like **Capacitor** or **Cordova** to bridge the web code to Android.
    - Use the `cordova-plugin-admob-free` or `@capacitor-community/admob` plugin.

---

## 3. Placement Strategy
- **Top Banner**: Good for high visibility.
- **Sidebar/In-stream**: High engagement without blocking content.
- **Native Ads**: Blend into the glassmorphism design (I have added a styled placeholder for this).

> [!IMPORTANT]
> Google will only show real ads once your site is **live** on a public URL and has been **reviewed/approved** by their team.
