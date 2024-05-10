import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import Topic from '@/components/Topic';

export default function InstallationArticle() {
  return (
    <Topic hash="installation">
      <ArticleSection>
        <ArticleTitle>Installation</ArticleTitle>
        <div className="space-y-4"></div>
      </ArticleSection>
    </Topic>
  );
}
