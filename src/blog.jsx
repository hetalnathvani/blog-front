import React from "react";
import "./index.css";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 1,
    label: "Tech Talk",
  },
];

const Blog = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>
            <h2>Maya - The Indigenously OS</h2>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <p>
            There are a few operating systems which come to our mind when we
            hear the word OS, and as we know that Windows is the Operating
            system which is used worldwide and the primary reason behind its
            global popularity is its very user-friendly interface which
            increases the user adaptability ratio, so the Indian defense system
            uses Windows.
          </p>
          <p>
            But, in 2021 India faced many cyber attacks from foreign actors that
            targeted the critical infrastructure and defense systems. The
            defense ministry decided to develop their own Operating system that
            provides similar user experience to Windows but more secure and
            reliable than Windows. So the defense ministry has taken the
            decision to replace their systems’ OS from Windows to Maya.
          </p>

          <h3>What is Maya ?</h3>
          <p>
            Maya is an open source operating system which is similar to Windows
            in Interface and provides robust shield against the Cyber threats
            and targeted attacks. It is based on Ubuntu - OS by Linux which is
            known to be more secure than Windows. Ubuntu has a built-in
            firewall, a strict user-permission system and regular security
            updates that help protect it from potential cyber threats.
          </p>
          <p>
            Maya - the name is derived from Sanskrit word “Maya” which means the
            “illusion”. The name suggests that the Maya can create the
            illusionary layer of protection for the defense ministry’s
            computers. It is developed by the Indian Government within 6 months
            and with special advisory of Centre for Development of Advanced
            Computing (C-DAC), National Information Centre (NIC) and Defense
            Research and Development Organization (DRDO).{" "}
          </p>
          <p>
            According to The Hindu, Maya has been developed by Indian government
            agencies within six months
          </p>
          <h3>The Core of Maya </h3>
          <p>
            Devices which have the preinstalled Windows OS, run on the NT
            kernel. A kernel is a program at the core of a computer's OS and it
            has complete control over everything in the system. It runs on
            computer Random Access Memory (RAM) and it gives the instructions to
            the device on how to perform the tasks. The above is the monolithic
            architecture of the kernel means that the single program contains
            all the codes which are necessary to perform the tasks. It provides
            rich and powerful abstraction on hardware but the line of code is in
            millions.{" "}
          </p>
          <p>
            So, to make this more effective, a new kernel design was developed
            i.e., microkernel. Microkernels are kernels broken down in small
            servers that communicate through small kernels. But that too has
            drawbacks like, larger usage of memory space, multiple software
            interactions in turn affects the performance.
          </p>
          <p>
            So, the Windows is using Hybrid kernel which is a combination of
            microkernel and some code to improve the performance, the Apple is
            also using the Hybrid kernel is a combination of microkernel and
            monolithic kernel both which is XNU, The Ubuntu which uses the
            Ubuntu Kernel and Maya uses the Monolithic kernel
          </p>

          <h3>
            What is it for ? Is it open source ? Can anyone install it and use
            it ?
          </h3>
          <p>
            The Maya is currently being rolled out in the Defense Ministry
            computers and not the three services. While the navy is said to have
            cleared Maya for use in its systems, the army and the Air force are
            still evaluating the software.
          </p>
          <h3>What is Chakravyuh ?</h3>
          <p>
            In addition to Maya OS, the Defense Ministry computers come with the
            Chakravyuh 'an endpoint detection and protection system'. It acts as
            a protecting layer between users and the internet, prevents
            unauthorized access attempts and safeguarding sensitive data.
          </p>
          <h3>Conclusion</h3>
          <p>
            And that covers it up... I would say Maya - The OS is a much awaited
            step by the Indian Defense Ministry, not only for the Arm forces and
            other agencies but also for the users who are seeking for the same
            user interface like Windows with Strong security like Ubuntu for
            smooth transition.
          </p>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Copyright ©2024 All rights reserved
      </Footer>
    </Layout>
  );
};
export default Blog;
