import sys
import json
from math import sqrt, sin, radians, cos


def calculate_eclipse(ap, pe, inclination_deg, longitude_deg, argument_deg, radius, std_grav, soi, central_mass, sol_distance,
                      colour):
    R = radius
    Ra = int(ap) + R
    Rp = int(pe) + R
    inclination = radians(inclination_deg)
    a = (Ra + Rp) / 2
    b = sqrt(Ra * Rp)
    e = (Ra - Rp) / (Ra + Rp)
    l = (2 * (Ra * Rp)) / (Ra + Rp)
    u = std_grav
    h = sqrt(l * u)

    adjusted_b = b * cos(inclination)

    sin_value = sin(R / adjusted_b)
    if sin_value == 0:
        raise ValueError("Calculation error due to division by zero in the sine function.")

    res = ((2 * a * adjusted_b) / h) * (1 / sin_value + (e * R / adjusted_b))

    visualization_data = {
        'solarDistance': sol_distance,
        'soi': soi,
        'centralMass': central_mass,
        'celestialBodySize': radius,
        'celestialBodyColor': colour,

        'semiMajorAxis': a,
        'semiMinorAxis': adjusted_b,
        'inclination': inclination_degree,
        'longitudeOfAscendingNode': longitude_deg,
        'argumentOfPeriapsis': argument_deg,
    }

    return res, visualization_data


if __name__ == '__main__':
    input_data = json.loads(sys.argv[1])
    apoapsis = input_data['apoapsis']
    periapsis = input_data['periapsis']
    inclination_degree = input_data['inclination']
    longitude_of_ascending_node = input_data['longitudeOfAscendingNode']
    argument_of_periapsis = input_data['argumentOfPeriapsis']

    body_radius = input_data['body']['radius']
    std_grav_param = input_data['body']['stdGravParam']
    sphere_of_influence = input_data['body']['soi']
    mass = input_data['body']['mass']
    solar_distance = input_data['body']['solarDistance']
    color = input_data['body']['color']

    try:
        result, vis_data = calculate_eclipse(
            apoapsis,
            periapsis,
            inclination_degree,
            longitude_of_ascending_node,
            argument_of_periapsis,
            body_radius,
            std_grav_param,
            sphere_of_influence,
            mass,
            solar_distance,
            color
        )
        print(json.dumps({'status': 200, 'result': result, 'visualization': vis_data}))
    except ValueError as e:
        print(json.dumps({'status': 400, 'error': str(e)}))
