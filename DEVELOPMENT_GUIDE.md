# Alternative development server options for Alfa Hospital Website

## Option 1: Live Server (Currently Running)
```bash
npm run dev
```
- Runs on: http://localhost:3000
- Auto-refreshes when files change
- Opens browser automatically

## Option 2: Python Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
- Runs on: http://localhost:8000
- Simple static file server

## Option 3: Node.js http-server
```bash
npx http-server -p 3000 -o
```
- Runs on: http://localhost:3000
- Lightweight alternative

## Testing Your Website Locally

1. **Main Site**: http://localhost:3000/index.html
2. **About Page**: http://localhost:3000/about.html
3. **Services Page**: http://localhost:3000/services.html
4. **Debug Images**: http://localhost:3000/debug-images.html
5. **Test Page**: http://localhost:3000/test.html

## What to Test

✅ **Image Loading**: Check if all images load correctly
✅ **Navigation**: Test all page links
✅ **Responsive Design**: Resize browser window
✅ **Background Images**: Check hero section backgrounds
✅ **Logo Display**: Verify logo appears in header/footer

## If Images Don't Load Locally

The issue might be:
1. **File paths** - Check browser console for 404 errors
2. **Case sensitivity** - Ensure exact file names
3. **File permissions** - Make sure files are readable

## Next Steps

1. **Test locally** with the development server
2. **Fix any issues** you find
3. **Commit changes** to git
4. **Deploy to Netlify** for production
