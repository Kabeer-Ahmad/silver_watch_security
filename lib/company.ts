/** Registered office & company details — single source of truth */
export const companiesHouseNumber = "SC881680";

export const companiesHouseUrl =
  "https://find-and-update.company-information.service.gov.uk/company/SC881680";

export const registeredAddress = {
  line1: "Flat 1",
  line2: "60 Spring Gardens",
  city: "Aberdeen",
  postcode: "AB25 1GN",
} as const;

export const registeredAddressLines = [
  registeredAddress.line1,
  registeredAddress.line2,
  `${registeredAddress.city}, ${registeredAddress.postcode}`,
] as const;
