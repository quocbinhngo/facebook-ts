import Stories from "../stories/Stories";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] py-8">
      <Stories />
    </div>
  );
}
