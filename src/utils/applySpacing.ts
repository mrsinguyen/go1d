function applySpacing(spacing: number[] = [], space: any) {
  if (space === undefined) {
    return;
  }

  if (typeof space === "string") {
    return space;
  }

  if (Array.isArray(space)) {
    return space.map(s => applySpacing(spacing, s));
  }

  if (spacing[space] !== undefined) {
    return spacing[space];
  }
  if (spacing[Math.abs(space)]) {
    return spacing[Math.abs(space)] * -1;
  }
  if (
    space > spacing[spacing.length - 1] ||
    Math.abs(space) > spacing[spacing.length - 1]
  ) {
    return space;
  }

  // tslint:disable-next-line no-console
  console.error(
    "Please use spacing scale for value smaller than " +
      spacing[spacing.length - 1]
  );

  return 0;
}

export default applySpacing;
