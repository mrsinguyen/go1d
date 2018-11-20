import * as TWEEN from "@tweenjs/tween.js";
import * as React from "react";
import ContainerDimensions from "react-container-dimensions";

import View, { ViewProps } from "../View";

import foundations from "../../foundations";
import ButtonFilled from "../ButtonFilled";

interface StandardProps extends ViewProps {
  children?: React.ReactNode;
  slidesToShow?: number;
  gutter?: number;
  clickScrollAmount?: number; // Number of slides that move on next click
  slideAnimationDuration?: number;
}

interface BreakpointProps {
  sm?: StandardProps;
  md?: StandardProps;
  lg?: StandardProps;
}

export interface CarouselProps extends StandardProps {
  breakpoints?: BreakpointProps;
}

class Carousel extends React.Component<CarouselProps, any> {
  public static defaultProps = {
    slidesToShow: 1,
    gutter: 2,
    clickScrollAmount: 1,
  };
  public timer = null;
  public slideRefs = [];
  public sliderContainerRef = React.createRef();

  public state = {
    currentSlide: 0,
    finishedScrolling: true,
  };

  public componentDidMount() {
    if (this.sliderContainerRef) {
      const Element: any = this.sliderContainerRef.current;
      Element.addEventListener("scroll", this.handleScrollTimer, false);
    }
  }

  public componentDidUpdate() {
    const { gutter, children } = this.props;
    const { finishedScrolling, currentSlide } = this.state;
    const Slider: any = this.sliderContainerRef.current;
    const SliderScroll = Slider.scrollLeft + foundations.spacing[gutter];
    const LastSlideCurrent = this.slideRefs.slice(-1)[0].current;
    const LastSlideRightEdge =
      LastSlideCurrent.offsetLeft + LastSlideCurrent.offsetWidth;

    if (
      LastSlideRightEdge <= SliderScroll + Slider.offsetWidth &&
      process.env.NODE_ENV !== "test"
    ) {
      // Test library does not suppport Element widths so this is always true even when it shouldnt be
      // Cannot scroll further right
      if (finishedScrolling === false) {
        this.setState({
          finishedScrolling: true,
        });
      }
    } else {
      if (finishedScrolling) {
        this.setState({
          finishedScrolling: false,
        });
      }
    }

    if (React.Children.toArray(children).length <= currentSlide) {
      // Incase some caroursel children update
      this.setState({
        currentSlide: React.Children.toArray(children).length - 1,
      });
    }
  }

  public componentWillUnmount() {
    if (this.sliderContainerRef) {
      const Element: any = this.sliderContainerRef.current;
      Element.removeEventListener("scroll", this.handleScrollTimer, false);
    }
  }

  public handleScrollTimer = () => {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(this.handleScrollFinished, 150);
  };

  public handleScrollFinished = () => {
    if (this.slideRefs.length > 0) {
      // Set the CurrentSlide when the user is finished scrolling
      const Slider: any = this.sliderContainerRef.current;
      const SliderScroll = Slider.scrollLeft;

      let Selected = this.slideRefs.findIndex(Ref => {
        const CurrentRef = Ref.current;

        if (
          SliderScroll >= CurrentRef.offsetLeft &&
          SliderScroll < CurrentRef.offsetLeft + CurrentRef.offsetWidth
        ) {
          return true;
        }

        return false;
      });

      if (Selected < 0) {
        Selected = 0;
      }

      let FinishedScrolling = false;

      const SliderRightEdge = SliderScroll + Slider.offsetWidth;
      const LastSlide: any = this.slideRefs.slice(-1)[0];
      const LastSlideCurrent = LastSlide.current;
      const LastSlideRightEdge =
        LastSlideCurrent.offsetLeft + LastSlideCurrent.offsetWidth;
      if (LastSlideRightEdge <= SliderRightEdge) {
        // Cannot scroll further right
        FinishedScrolling = true;
      }

      const CurrentSlide = this.slideRefs[Selected].current;

      if (CurrentSlide.offsetLeft < SliderScroll && !FinishedScrolling) {
        // Snap to a start position
        if (
          CurrentSlide.offsetLeft + CurrentSlide.offsetWidth / 2 <
          SliderScroll
        ) {
          this.scrollToIndex(Selected + 1)();
        } else {
          this.scrollToIndex(Selected)();
        }
      }

      this.setState({
        currentSlide: Selected,
        finishedScrolling: FinishedScrolling,
      });
    }
  };

  public scrollToIndex = Index => () => {
    const { children, slideAnimationDuration } = this.props;
    let ScrollIndex = Index;

    if (ScrollIndex < 0) {
      ScrollIndex = 0;
    }

    if (ScrollIndex >= React.Children.toArray(children).length - 1) {
      ScrollIndex = React.Children.toArray(children).length - 1;
    }

    if (ScrollIndex < React.Children.toArray(children).length) {
      const Slider: any = this.sliderContainerRef.current;
      const ElementOffset = this.slideRefs[ScrollIndex].current.offsetLeft;

      const coords = { x: Slider.scrollLeft, y: 0 }; // Start at (0, 0)
      let allowAnimationPropogation = true;
      const animate = time => {
        if (allowAnimationPropogation) {
          requestAnimationFrame(animate);
        }
        TWEEN.update(time);
      };

      requestAnimationFrame(animate);

      new TWEEN.Tween(coords)
        .to({ x: ElementOffset, y: 0 }, slideAnimationDuration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          Slider.scrollTo(coords.x, 0);
        })
        .onComplete(() => {
          allowAnimationPropogation = false;
        })
        .start();

      this.setState(prevState => ({
        currentSlide: prevState.currentSlide + 1,
      }));
    }
  };

  public render() {
    const {
      children,
      slidesToShow,
      gutter,
      css,
      clickScrollAmount,
      ...props
    } = this.props;
    const { currentSlide, finishedScrolling } = this.state;

    return (
      <View position="relative" {...props}>
        <View
          innerRef={this.sliderContainerRef}
          flexDirection="row"
          width="100%"
          data-testid="ScrollableCarousel"
          css={{
            overflowX: "auto",
            "::-webkit-scrollbar": {
              width: 0,
              background: "transparent",
            },
            ...(css as object),
          }}
        >
          {React.Children.map(children, (Slide, Index) => {
            const SlideRef = React.createRef();
            this.slideRefs[Index] = SlideRef;

            return (
              <View
                innerRef={SlideRef}
                maxWidth={`${100 / slidesToShow}%`}
                paddingX={foundations.spacing[gutter] / 2}
                marginY={1}
                css={{
                  ":first-child": {
                    paddingLeft: 0,
                  },
                  ":last-child": {
                    paddingRight: 0,
                  },
                }}
              >
                {Slide}
              </View>
            );
          })}
        </View>
        {currentSlide > 0 && (
          <ButtonFilled
            onClick={this.scrollToIndex(
              this.state.currentSlide - clickScrollAmount
            )}
            data-testid="leftNavigationButton"
            iconName="ChevronLeft"
            position="absolute"
            height={32}
            width={32}
            justifyContent="center"
            css={{
              borderRadius: "50%",
              top: "calc(50% - 16px)",
              left: -16,
            }}
          />
        )}
        {!finishedScrolling &&
          currentSlide < this.slideRefs.length - 1 && (
            <ButtonFilled
              onClick={this.scrollToIndex(
                this.state.currentSlide + clickScrollAmount
              )}
              data-testid="rightNavigationButton"
              iconName="ChevronRight"
              position="absolute"
              height={32}
              width={32}
              justifyContent="center"
              css={{
                borderRadius: "50%",
                top: "calc(50% - 16px)",
                right: -16,
              }}
            />
          )}
      </View>
    );
  }
}

const ExportCarousel: React.SFC<CarouselProps> = (props: CarouselProps) => (
  <ContainerDimensions>
    {Params => {
      let size = "lg";
      if (Params.width < 600) {
        size = "sm";
      }

      if (Params.width > 600 && Params.width < 1100) {
        size = "md";
      }

      const { breakpoints = {}, ...RemainingProps } = props;

      const PassProps = {
        // Use the props for the current size
        ...RemainingProps,
        ...(breakpoints[size] || {}),
      };

      return <Carousel size={size} {...PassProps} />;
    }}
  </ContainerDimensions>
);

ExportCarousel.displayName = "Carousel";

export default ExportCarousel;
