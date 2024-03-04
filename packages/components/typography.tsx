interface TypographyProps {
  children: string;
}

export const Heading = (props: TypographyProps) => {
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      role="heading"
    >
      {props.children}
    </h1>
  );
};

export const Paragraph = (props: TypographyProps) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" role="contentinfo">
      {props.children}
    </p>
  );
};
