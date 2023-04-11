import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image7,
  Image8,
  Image6,
} from "@/Images/Index";
const NavData = [
  {
    Link: "#header",
    Title: "Home",
  },
  {
    Link: "#section-two",
    Title: "About Us",
  },
  {
    Link: "#section-three",
    Title: "Features",
  },
  {
    Link: "#products",
    Title: "Products",
  },
  {
    Link: "#contact-use",
    Title: "Contact Us",
  },
];
const ContactUs = [
  {
    className: "footer-paragraph",
    Text: "labore et dolore magna aliquyam erat,",
  },
  {
    className: "footer-paragraph",
    Text: "+513 313 135 2522",
  },
  {
    className: "footer-paragraph",
    Text: "Contact@logo.io",
  },
];
const FeatureData = [
  {
    className: "box box-color",
    Path: Image1,
    HeadingClass: "light-blue-heading",
    HeadingTitle: "Progressive Structure",
    ParagraphClass: "paragraph",
    ParagraphText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus",
  },
  {
    className: "box box-color2",
    Path: Image2,
    HeadingClass: "light-blue-heading",
    HeadingTitle: "Technical Practices",
    ParagraphClass: "paragraph",
    ParagraphText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus",
  },
  {
    className: "box box-color",
    Path: Image3,
    HeadingClass: "light-blue-heading",
    HeadingTitle: "DevOps Teams",
    ParagraphClass: "paragraph",
    ParagraphText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus",
  },
];
const Products = [
  {
    Path: Image8,
    className: "img-style1",
  },
  {
    Path: Image6,
    className: "img-style2",
  },
  {
    Path: Image4,
    className: "img-style3",
  },
  {
    Path: Image5,
    className: "img-style2",
  },
  {
    Path: Image7,
    className: "img-style1",
  },
];
const SectionData = [
  {
    SectionClass: null,
    left: null,
    right: null,
    middle: null,
    Id: "section-one",
    HeadingTitle: "Welcome to the world of",
    HeadingClass: "heading1",
    SpanTitle: "INNOVATION",
    SpanClass: "light-blue-heading heading1",
    ParagrahText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    ParagraphClass: "paragraph",
    BoxClass: "blue-box",
  },
  {
    SectionClass: null,
    left: "left",
    right: null,
    middle: null,
    Id: "section-two",
    HeadingTitle: "About Us",
    HeadingClass: "greeny-heading",
    SpanTitle: null,
    SpanClass: null,
    ParagrahText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    ParagraphClass: "paragraph",
    BoxClass: null,
  },
  {
    SectionClass: "section-three",
    left: "left",
    right: "right",
    middle: "middle",
    Id: "section-three",
    HeadingTitle: "Features",
    HeadingClass: "white-heading heading1",
    SpanTitle: null,
    SpanClass: null,
    ParagrahText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus",
    ParagraphClass: "paragraph",
    BoxClass: null,
  },
  {
    SectionClass: null,
    left: "",
    right: "",
    middle: "middle",
    Id: "section-four",
    HeadingTitle: "",
    HeadingClass: "",
    SpanTitle: null,
    SpanClass: null,
    ParagrahText: "",
    ParagraphClass: "",
    BoxClass: null,
    Content: [...FeatureData],
  },
  {
    SectionClass: "section-five",
    left: "left",
    right: "right",
    middle: "middle",
    Id: "section-five",
    HeadingTitle: "Products",
    HeadingClass: "white-heading heading1",
    SpanTitle: null,
    SpanClass: null,
    ParagrahText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus",
    ParagraphClass: "paragraph",
    BoxClass: null,
  },
  ,
];
export { NavData, ContactUs, SectionData, FeatureData, Products };
