
# -*- coding: UTF-8 -*-

import matplotlib.pyplot as plt
import matplotlib as mpl
mpl.use('Agg')
from pymatgen.io.vasp.outputs import Vasprun
from pymatgen.electronic_structure.plotter import BSDOSPlotter,\
BSPlotter,BSPlotterProjected,DosPlotter
import os, sys
os.chdir(sys.path[0])

# read vasprun.xml，get band and dos information
bs_vasprun = Vasprun("./upload_band_dos.xml",parse_projected_eigen=True)
bs_data = bs_vasprun.get_band_structure(line_mode=True)
    
dos_vasprun=Vasprun("./upload_band_dos.xml")
dos_data=dos_vasprun.complete_dos
    
# set figure parameters, draw figure
banddos_fig = BSDOSPlotter(bs_projection='elements', dos_projection='elements',
vb_energy_range=4, fixed_cb_energy=4)
banddos_fig.get_plot(bs=bs_data, dos=dos_data)
plt.savefig('./banddos_fig.png')