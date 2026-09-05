import Text from "./typography";

type CertificateEntryProps = {
  issuer: string;
  title: string;
  date: string;
};

export default function CertificateEntry({
  issuer,
  title,
  date
}: CertificateEntryProps) {
  return (
    <div className="flex w-full items-start justify-between gap-4">
      <div className="w-full">
        <div className=" w-full flex flex-row justify-between">
          <Text as="p" variant="fineprint" className="text-muted-foreground">
            {issuer}
          </Text>
          <Text variant="fineprint" className="text-muted-foreground">
            {date}
          </Text>
        </div>

        <p className="text-body-lg-desktop">{title}</p>
      </div>
    </div>
  );
}
