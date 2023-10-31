import { Link } from "react-router-dom";

import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="Offline Website Template">
      <p>Hello, World!</p>

      <Link to="/alternative">Navigate to the alternative route!</Link>
    </Layout>
  );
}
