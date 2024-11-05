import { useMeetupQuery } from "../util-hooks/useMeetupQuery";
import AllMeetupsPage from "./AllMeetupsPage";
import MeetupItem from "../components/meetups/MeetupItem";
import { shallow } from "enzyme";

jest.mock("../util-hooks/useMeetupQuery");

const mockItem = {
  id: "m1",
  title: "This is a first meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Meetupstreet 5, 12345 Meetup City",
  description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
}

describe("AllMeetupsPage", () => {
  describe("when the data is not loaded", () => {
    test('it renders the loading message', () => {
      useMeetupQuery.mockReturnValue({ data: null })

      const wrapper = shallow(<AllMeetupsPage />);
      expect(wrapper.text()).toBe('Loading...')
    })
  })

  describe("when the data is loaded", () => {
    test('it renders the list of meetups', () => {
      useMeetupQuery.mockReturnValue({
        data: [
          mockItem
        ]
      })

      const wrapper = shallow(<AllMeetupsPage />);
      expect(wrapper.find(MeetupItem).length).toBe(1)
    })
  })
})