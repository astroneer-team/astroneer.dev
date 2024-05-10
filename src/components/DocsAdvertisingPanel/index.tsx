import Button from '../Button';

export default function DocsAdvertisingPanel() {
  return (
    <div className="sticky top-[65px] pt-12 right-0 h-[calc(100vh-65px)] hidden md:flex md:flex-shrink-0 md:flex-col md:justify-between">
      <Button>Become a sponsor</Button>
    </div>
  );
}
