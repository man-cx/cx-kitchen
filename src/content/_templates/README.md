# How to Add New Blog Posts

Follow these simple steps to add a new blog post:

1. **Create a New File**
   - Go to `src/content/blog/`
   - Copy `template.md`
   - Rename it with your post's URL-friendly name (e.g., `my-new-post.md`)
   - Use lowercase letters, numbers, and hyphens only

2. **Fill in the Frontmatter**
   ```md
   ---
   title: "Your Blog Post Title"
   date: "YYYY-MM-DD"  # Current date
   author: "CX-Kitchen Team"
   excerpt: "A brief summary"
   image: "https://images.unsplash.com/photo-XXXXX"
   tags: ["Tag1", "Tag2"]
   ---
   ```

3. **Add Your Content**
   - Write your content using Markdown
   - Use headings (##) for sections
   - Add images, links, and formatting as needed
   - Keep paragraphs short and readable
   - Include a call-to-action at the end

4. **Finding Images**
   - Visit [Unsplash](https://unsplash.com)
   - Find a relevant image
   - Click on the image
   - Copy the URL with `?w=800&auto=format&fit=crop&q=60` parameters

5. **Common Tags**
   - AI
   - Productivity
   - Automation
   - Business Growth
   - Guide
   - Tips
   - Features
   - Best Practices
   - Case Study
   - Industry Insights

6. **Best Practices**
   - Keep titles clear and concise
   - Write engaging introductions
   - Use subheadings to break up content
   - Include practical examples
   - End with a clear call-to-action
   - Proofread before committing

7. **Testing**
   - After adding your post, run the development server
   - Check that your post appears on the blog page
   - Verify all links work
   - Ensure images load correctly

Need help? Contact the development team for assistance. 