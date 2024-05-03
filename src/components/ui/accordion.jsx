import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-[2rem] text-[2rem]  transition-all  [&[data-state=open]>svg]:rotate-180 ",
          className
        )}
        {...props}
      >
        {children}
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7081 1.70757L11.7081 11.7076C11.6152 11.8005 11.5049 11.8743 11.3835 11.9246C11.2621 11.975 11.132 12.0009 11.0006 12.0009C10.8691 12.0009 10.739 11.975 10.6176 11.9246C10.4962 11.8743 10.3859 11.8005 10.2931 11.7076L0.293056 1.70757C0.105415 1.51993 0 1.26543 0 1.00007C0 0.734704 0.105415 0.480208 0.293056 0.292567C0.480697 0.104927 0.735192 -0.000488281 1.00056 -0.000488281C1.26592 -0.000488281 1.52042 0.104927 1.70806 0.292567L11.0006 9.58632L20.2931 0.292567C20.386 0.199657 20.4963 0.125957 20.6177 0.0756741C20.7391 0.0253914 20.8692 -0.000488281 21.0006 -0.000488281C21.132 -0.000488281 21.2621 0.0253914 21.3835 0.0756741C21.5048 0.125957 21.6151 0.199657 21.7081 0.292567C21.801 0.385477 21.8747 0.495778 21.9249 0.617171C21.9752 0.738564 22.0011 0.868673 22.0011 1.00007C22.0011 1.13146 21.9752 1.26157 21.9249 1.38296C21.8747 1.50436 21.801 1.61466 21.7081 1.70757Z"
            fill="#343330"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-[1.8rem] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
