import Layout from "../components/Layout";
const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

export default function Index() {
  return (
    <div>
      <Layout>HOME</Layout> in page, outside Layout
    </div>
  );
}
