function ft_mt(ft) {
    if (!Number.isFinite(ft)) return NaN;
    if (ft === Infinity || ft === -Infinity) return ft;

    const conversion_ratio = 3.28084;
    return ft / conversion_ratio;
}
