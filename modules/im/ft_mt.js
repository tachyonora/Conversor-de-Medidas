function ft_mt(ft) {
    if (ft === Infinity || ft === -Infinity) return ft;
    if (!Number.isFinite(ft)) return NaN;

    const conversion_ratio = 3.28084;
    return ft / conversion_ratio;
}
