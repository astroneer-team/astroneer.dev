import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';

export default function Page() {
  return (
    <>
      <ArticleSection>
        <ArticleTitle>Support us</ArticleTitle>
        <div className="space-y-4">
          <p>
            Astroneer is an MIT-licensed open source project. It&apos;s an
            independent project with its ongoing development made possible
            thanks to the support by the community. Astroneer is free to use and
            always will be. This framework is a result of sleepless nights,
            hours of development, and continuous improvement.
          </p>
        </div>
      </ArticleSection>
    </>
  );
}
