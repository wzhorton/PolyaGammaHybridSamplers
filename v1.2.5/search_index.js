var documenterSearchIndex = {"docs":
[{"location":"getting_started/#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"getting_started/#Installation","page":"Getting Started","title":"Installation","text":"","category":"section"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"You can install the package with the Julia package manager Pkg:","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"# Press ']' to enter the Pkg REPL mode.\npkg> add PolyaGammaHybridSamplers","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"or:","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"julia> using Pkg\njulia> Pkg.add(\"PolyaGammaHybridSamplers\")","category":"page"},{"location":"getting_started/#Sampling","page":"Getting Started","title":"Sampling","text":"","category":"section"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"Start by including the package:","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"julia> using PolyaGammaHybridSamplers","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"Then create a sampler object:","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"julia> s = PolyaGammaHybridSampler(5, 4.0)","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"The rand function can be used to draw samples from the sampler object s:","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"julia> rand(s, 3)","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"The default sampling method is HYBRID, which dymanically selects between DEVROYE, SADDLEPOINT, and NORMALAPPROX depending on the parameters (see the README for more details). A sampler can be forced to always use a certain method by including it as an argument, e.g.:","category":"page"},{"location":"getting_started/","page":"Getting Started","title":"Getting Started","text":"julia> s = PolyaGammaHybridSampler(5, 4.0, SADDLEPOINT)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = PolyaGammaHybridSamplers","category":"page"},{"location":"#PolyaGammaHybridSamplers","page":"Home","title":"PolyaGammaHybridSamplers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for PolyaGammaHybridSamplers.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [PolyaGammaHybridSamplers]","category":"page"},{"location":"#PolyaGammaHybridSamplers.PolyaGammaHybridSampler","page":"Home","title":"PolyaGammaHybridSamplers.PolyaGammaHybridSampler","text":"PolyaGammaHybridSampler(b::Real, z::Real, [method::PGSamplingMethod])\n\nA sampler for the Polya-Gamma distribution using a hybrid of the saddlepoint approximation, the Devroye method,  the normal approximation, and the sum of gammas approximation, each of which are discussed in  Windle et al. (2014) – see README.md for details.\n\nArguments\n\nb::Real: The shape parameter of the Polya-Gamma distribution. Must be positive.\nz::Real: The exponential tilting parameter of the Polya-Gamma distribution.\nmethod::PGSamplingMethod : An Enum object specifying the method used to sample from the Polya-Gamma distribution.    Must be one ofDEVROYE,SADDLEPOINT,NORMALAPPROX,GAMMASUM, orDEVROYEPLUSGAMMASUM.   If omitted, the method is chosen automatically based on the value ofb`.\n\nReturns\n\nA PolyaGammaHybridSampler object which can be sampled using rand or rand!.\n\nExamples\n\njulia> using PolyaGammaHybridSamplers\njulia> s = PolyaGammaHybridSampler(1, 1.0)\njulia> rand(s)\n\nNotes\n\nAutomatic selection criteria: \nb > 170 -> NORMALAPPROX\nb >= 13 -> SADDLEPOINT\nb >= 1 && isinteger(b) -> DEVROYE\nb > 1 && !isinteger(b) -> DEVROYEPLUSGAMMASUM\nb >= 0 -> GAMMASUM\nb = 0 -> degenerate distribution at 0\n\n\n\n\n\n","category":"type"},{"location":"#PolyaGammaHybridSamplers.rand_pgdevroye-Tuple{Integer, Real, Random.AbstractRNG}","page":"Home","title":"PolyaGammaHybridSamplers.rand_pgdevroye","text":"rand_pgdevroye(b::Integer, z::Real, [rng::AbstractRNG = Random.default_rng()]])\n\nSample from a Polya-Gamma distribution using the Devroye method.\n\nArguments\n\nb::Integer: the shape parameter\nz::Real: the exponential tilting parameter\nrng::AbstractRNG: optional random number generator object for rand\n\nReturns\n\nA sample from the Polya-Gamma distribution with shape parameter b and exponential tilting parameter z.\n\nNotes\n\nThis method is exact, but is increasingly slower as b increases.\nThis sampler requires integer b.\nAutomatically selects the method when b < 13 and is an integer.\n\n\n\n\n\n","category":"method"},{"location":"#PolyaGammaHybridSamplers.rand_pggammasum-Tuple{Real, Real, Random.AbstractRNG}","page":"Home","title":"PolyaGammaHybridSamplers.rand_pggammasum","text":"rand_pggammasum(b::Real, z::Real, [rng::AbstractRNG = Random.default_rng()])\n\nSample from a Polya-Gamma distribution using the truncated sum of gammas representation.\n\nArguments\n\nb::Real: the shape parameter\nz::Real: the exponential tilting parameter\nrng::AbstractRNG: random number generator object for rand\n\nReturns\n\nA sample from the Polya-Gamma distribution with shape parameter b and exponential tilting parameter z.\n\nNotes\n\nThis method supports non-integer b but is only an approximation, meant only for b < 1\nNo warning is given if b is too large.\nThe sum is truncated to 200 terms according to the paper's recommendation.\nAutomatically selects this method when b < 1 or when used in combination with the devroye method for non-integer b.\n\n\n\n\n\n","category":"method"},{"location":"#PolyaGammaHybridSamplers.rand_pgnormalapprox-Tuple{Real, Real, Random.AbstractRNG}","page":"Home","title":"PolyaGammaHybridSamplers.rand_pgnormalapprox","text":"rand_pgnormalapprox(b::Real, z::Real, [rng::AbstractRNG = Random.default_rng()])\n\nSample from a Polya-Gamma distribution using the normal approximation method.\n\nArguments\n\nb::Real: the shape parameter\nz::Real: the exponential tilting parameter\nrng::AbstractRNG: random number generator object for rand\n\nReturns\n\nA sample from the Polya-Gamma distribution with shape parameter b and exponential tilting parameter z.\n\nNotes\n\nThis method is an approximation that supports non-integer b and is very efficient for large b.\nAutomatically selects this method when b >= 170.\n\n\n\n\n\n","category":"method"},{"location":"#PolyaGammaHybridSamplers.rand_pgsaddlepoint-Tuple{Real, Real, Random.AbstractRNG}","page":"Home","title":"PolyaGammaHybridSamplers.rand_pgsaddlepoint","text":"rand_pgsaddlepoint(b::Real, z::Real, [rng::AbstractRNG = Random.default_rng()])\n\nSample from a Polya-Gamma distribution using the saddlepoint approximation method.\n\nArguments\n\nb::Real: the shape parameter\nz::Real: the exponential tilting parameter\nrng::AbstractRNG: random number generator object for rand\n\nReturns\n\nA sample from the Polya-Gamma distribution with shape parameter b and exponential tilting parameter z.\n\nNotes\n\nThis method is an approximation that supports non-integer b and is quite efficient for large b.\nAutomatically selects this method when b >= 13.\n\n\n\n\n\n","category":"method"}]
}
