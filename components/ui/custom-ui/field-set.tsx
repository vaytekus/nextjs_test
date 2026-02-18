const FieldSet = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <fieldset
      className={`relative clear-both mb-0 mt-[20px] block w-full ${className}`}
    >
      {children}
    </fieldset>
  );
};

export default FieldSet;
