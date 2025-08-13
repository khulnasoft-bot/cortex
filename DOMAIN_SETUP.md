# Custom Domain Setup Guide for CortexDev

This guide will help you set up a custom domain for your CortexDev application deployed on Vercel.

## Prerequisites

- A registered domain name (e.g., cortexdev.com)
- Access to your domain registrar's DNS settings
- Vercel account with your project deployed

## Step 1: Configure Domain in Vercel Dashboard

1. **Go to your Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your CortexDev project

2. **Add Custom Domain**
   - Click on the "Settings" tab
   - Navigate to "Domains" section
   - Click "Add Domain"
   - Enter your domain: `cortexdev.com`
   - Click "Add"

3. **Add www Subdomain (Optional but Recommended)**
   - Add another domain: `www.cortexdev.com`
   - Set it to redirect to your main domain

## Step 2: Configure DNS Records

### Option A: Using Vercel Nameservers (Recommended)

1. **Get Vercel Nameservers**
   - In your Vercel domain settings, you'll see nameservers like:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`

2. **Update Your Domain Registrar**
   - Log into your domain registrar (GoDaddy, Namecheap, etc.)
   - Find DNS/Nameserver settings
   - Replace existing nameservers with Vercel's nameservers
   - Save changes

### Option B: Using Custom DNS Records

If you prefer to keep your current nameservers:

1. **Add A Record**
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: 3600
   \`\`\`

2. **Add CNAME Record for www**
   \`\`\`
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   \`\`\`

3. **Add CNAME Record for Vercel**
   \`\`\`
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   TTL: 3600
   \`\`\`

## Step 3: SSL Certificate

Vercel automatically provisions SSL certificates for custom domains. This process usually takes a few minutes to complete.

## Step 4: Verify Domain Setup

1. **Check DNS Propagation**
   - Use tools like [whatsmydns.net](https://www.whatsmydns.net/)
   - Enter your domain and check A/CNAME records globally

2. **Test Your Domain**
   - Visit `https://yourdomain.com`
   - Ensure it loads your CortexDev application
   - Check that HTTPS is working (green lock icon)

## Step 5: Update Application Configuration

Update any hardcoded URLs in your application:

1. **Environment Variables**
   \`\`\`env
   VITE_APP_URL=https://cortexdev.com
   VITE_API_URL=https://api.cortexdev.com
   \`\`\`

2. **Update Social Media Links**
   - Update Open Graph URLs
   - Update Twitter card URLs
   - Update canonical URLs

## Common DNS Providers Setup

### GoDaddy
1. Go to DNS Management
2. Add A record: `@` → `76.76.19.61`
3. Add CNAME: `www` → `cname.vercel-dns.com`

### Namecheap
1. Go to Advanced DNS
2. Add A record: `@` → `76.76.19.61`
3. Add CNAME: `www` → `cname.vercel-dns.com`

### Cloudflare
1. Go to DNS settings
2. Add A record: `@` → `76.76.19.61`
3. Add CNAME: `www` → `cname.vercel-dns.com`
4. Set Proxy status to "Proxied" for both records

## Troubleshooting

### Domain Not Working
- Check DNS propagation (can take up to 48 hours)
- Verify DNS records are correct
- Clear browser cache and try incognito mode

### SSL Certificate Issues
- Wait for automatic provisioning (usually 5-10 minutes)
- Check that DNS records are pointing correctly
- Contact Vercel support if issues persist

### Redirect Issues
- Ensure www domain is set to redirect to main domain
- Check that both HTTP and HTTPS redirects work

## Performance Optimization

1. **Enable Compression**
   - Vercel automatically enables gzip compression

2. **CDN Configuration**
   - Vercel's global CDN is automatically configured

3. **Caching Headers**
   - Configured in `vercel.json` for optimal performance

## Security Headers

The following security headers are automatically configured:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Monitoring

1. **Vercel Analytics**
   - Enable in your Vercel dashboard
   - Monitor performance and usage

2. **Domain Health**
   - Set up monitoring for uptime
   - Monitor SSL certificate expiration

## Support

If you encounter issues:
1. Check Vercel's status page
2. Review Vercel documentation
3. Contact Vercel support
4. Check community forums

---

Your CortexDev application should now be accessible at your custom domain with full HTTPS support and optimal performance!
\`\`\`

Let me also create an environment configuration file:
