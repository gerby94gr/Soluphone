type Props = {
  params: {
    id: string;
  };
};

export default function CustomerPage({
  params,
}: Props) {
  return (
    <div
      style={{
        padding: 30,
        color: "white",
      }}
    >
      <h1>
        Cliente #{params.id}
      </h1>

      <p>
        Página en construcción
      </p>
    </div>
  );
}