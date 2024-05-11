import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';

export default function ApiReferenceArticle() {
  return (
    <div>
      <ArticleSection>
        <ArticleTitle>API Reference</ArticleTitle>
        <div className="space-y-4">
          <p>
            The Astroneer.js API reference provides detailed information about
            the various classes, methods, and properties available in the
            framework. Use the navigation on the left to explore the different
            sections of the API.
          </p>
        </div>
      </ArticleSection>
    </div>
  );
}
